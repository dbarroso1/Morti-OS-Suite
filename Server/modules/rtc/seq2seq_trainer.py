import numpy as np
import tensorflow as tf
import re
import time

import preprocessor as prep
'''
Sequence 2 Squence Chat Bot Training Engine
'''

print("Training has started")
batch_index_check_training_loss = 100
batch_index_check_validation_loss = ((len(prep.training_questions)) // prep.batch_size // 2) - 1
total_training_loss_error = 0
list_validation_loss_error = []
early_stopping_check = 0
early_stopping_stop = 100
checkpoint = "./weights/chatbot_weights.ckpt"
prep.session.run(tf.global_variables_initializer())
for epoch in range(1, prep.epochs + 1):
    for batch_index, (padded_questions_in_batch, padded_answers_in_batch) in enumerate(prep.split_into_batches(prep.training_questions, prep.training_answers, prep.batch_size)):
        starting_time = time.time()
        _, batch_training_loss_error = prep.session.run([prep.optimizer_gradient_clipping, prep.loss_error], {prep.inputs: padded_questions_in_batch,
                                                                                               prep.targets: padded_answers_in_batch,
                                                                                               prep.lr: prep.learning_rate,
                                                                                               prep.sequence_length: padded_answers_in_batch.shape[1],
                                                                                               prep.keep_prob: prep.keep_probability})
        total_training_loss_error += batch_training_loss_error
        ending_time = time.time()
        batch_time = ending_time - starting_time
        if batch_index % batch_index_check_training_loss == 0:
            print('Epoch: {:>3}/{}, Batch: {:>4}/{}, Training Loss Error: {:>6.3f}, Training Time on 100 Batches: {:d} seconds'.format(epoch,
                                                                                                                                       prep.epochs,
                                                                                                                                       batch_index,
                                                                                                                                       len(prep.training_questions) // prep.batch_size,
                                                                                                                                       total_training_loss_error / batch_index_check_training_loss,
           
                                                                                                                            int(batch_time * batch_index_check_training_loss)))
            total_training_loss_error = 0
        if batch_index % batch_index_check_validation_loss == 0 and batch_index > 0:
            total_validation_loss_error = 0
            starting_time = time.time()
            for batch_index_validation, (padded_questions_in_batch, padded_answers_in_batch) in enumerate(prep.split_into_batches(prep.validation_questions, prep.validation_answers, prep.batch_size)):
                batch_validation_loss_error = prep.session.run(prep.loss_error, {prep.inputs: padded_questions_in_batch,
                                                                       prep.targets: padded_answers_in_batch,
                                                                       prep.lr: prep.learning_rate,
                                                                       prep.sequence_length: padded_answers_in_batch.shape[1],
                                                                       prep.keep_prob: 1})
                total_validation_loss_error += batch_validation_loss_error
            ending_time = time.time()
            batch_time = ending_time - starting_time
            average_validation_loss_error = total_validation_loss_error / (len(prep.validation_questions) / prep.batch_size)
            print('Validation Loss Error: {:>6.3f}, Batch Validation Time: {:d} seconds'.format(average_validation_loss_error, int(batch_time)))
            prep.learning_rate *= prep.learning_rate_decay
            if prep.learning_rate < prep.min_learning_rate:
                prep.learning_rate = prep.min_learning_rate
            list_validation_loss_error.append(average_validation_loss_error)
            if average_validation_loss_error <= min(list_validation_loss_error):
                print('I speak better now!!')
                early_stopping_check = 0
                saver = tf.train.Saver()
                saver.save(prep.session, checkpoint)
            else:
                print("Sorry I do not speak better, I need to practice more.")
                early_stopping_check += 1
                if early_stopping_check == early_stopping_stop:
                    break
    if early_stopping_check == early_stopping_stop:
        print("My apologies, I cannot speak better anymore. This is the best I can do.")
        break
print("Game Over")