export interface Message {
  id: number;
  text: string;
  date: string;
  sender: "admin" | "user";
}

export interface ChatState {
  messages: Message[];
  newMessage: string;
}

export interface ChatProps {
  title: string;
  userName: string;
  description: string;
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  chatState: {
    messages: Message[];
    newMessage: string;
  };
  onNewMessageChange: (newMessage: string) => void;
  onSendMessage: (message: string) => void;
  userType: "admin" | "user";
}

export interface ImageData {
  id: number;
  src: string;
  alt: string;
}

export interface ModalProps {
  isOpen: boolean;
  images: ImageData[] | null;
  currentImage: number | null;
  onClose: () => void;
}

export interface CardParams {
  id: number;
  name: string;
  avatar: string;
  text: string;
  images: ImageData[];
  date: string;
  comments: string;
  likes: number;
  openModal: (images: ImageData[], item: number) => void;
}

export interface ReviewsProps {
  openModal: (images: ImageData[], item: number) => void;
}

export type RatingType = Pick<ChatProps, "rating">;
