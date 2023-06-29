import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '139d4b7f-7197-45a4-b257-aa8d0884eba7',
        props.user.username,
        props.user.secret
    );
    return (<div style={{height : '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height : '100%'}} />
    </div>
    )
}

export default ChatsPage