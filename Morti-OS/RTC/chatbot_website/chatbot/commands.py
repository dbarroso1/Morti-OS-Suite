def command(phrase):
    if phrase == 'hello':
        print("Hi")
    return

def startChat():    

    while True:    
        user = input('you: ')
        
        if user == 'exit' or 'bye':
            break
        else:
            command(user)

startChat()