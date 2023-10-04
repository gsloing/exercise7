class User {
    constructor(userName) {
        this.username = userName;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username) {
        this.username = username;
    }
}

class ChatUser extends User {
    constructor(userName) {
        super(userName);
        this.warningCount = 0;
    }

    giveWarning() {
        this.warningCount++;
    }

    getWarningCount() {
        return this.warningCount;
    }
}

// The code for reading input and performing operations remains the same.

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const initialUsername = readLine().trim();
    const chatUserObj = new ChatUser(initialUsername);
    
    let numberOfOperations = parseInt(readLine().trim());
    while (numberOfOperations-- > 0) {
        const inputs = readLine().trim().split(' ');
        const operation = inputs[0];
        const username = inputs[1];

        switch(operation) {
            case 'GiveWarning':
                chatUserObj.giveWarning();
                break;
            case 'SetName':
                chatUserObj.setUsername(username);
                break;
            default:
                break;
        }
    }
    ws.write(`User ${chatUserObj.getUsername()} has a warning count of ${chatUserObj.getWarningCount()}\n`);
    ws.write(`ChatUser extends User: ${(chatUserObj instanceof User).toString()}`);
    ws.end();
}
