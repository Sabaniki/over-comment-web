import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export interface Comment {
  text: string;
  color: string;
  size: number;
  createdAt: Timestamp;
}
