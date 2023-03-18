const handleCommand = (message) => {
    const [command, convo] = message.split(' ');
    let response = '';

    switch (command) {
        case '/':
            // get list of convos
            response = `You asked for a list of conversations`;
            break;
        case '/del':
            // delete the specific convo from gpt
            response = `You are trying to delete *${convo}* conversation`;
            break;
        case '/delall':
            // list of convos
            response = `You are trying to delete all conversations`;
            break;
        case '/use':
            // use a specific convo
            response = `You asked to use the *${convo}* conversation`;
            break;
        default:
            response = 'Cannot understand your request';
    }

    return response;
}

module.exports = {
    handleCommand
}
