import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

const messagesQueue: Message[] = [];

const socket = io(`${import.meta.env.VITE_API_BASE_URL}`);

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage);
});

export function MessageList(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) => [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean));
        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    api.get<Message[]>('messages').then((response) => {
      setMessages(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logo} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        {messages.length > 0 ? (
          messages.map((message) => {
            return (
              <li className={styles.message} key={message.id}>
                <p className={styles.messageContent}>{message.text}</p>
                <div className={styles.messageUser}>
                  <div className={styles.userImage}>
                    <img src={`${message.user.avatar_url}`} alt={`${message.user.name}`} />
                  </div>
                  <span>{message.user.name}</span>
                </div>
              </li>
            );
          })
        ) : (
          <li>Ainda não há mensagens sobre o evento!</li>
        )}
      </ul>
    </div>
  );
}
