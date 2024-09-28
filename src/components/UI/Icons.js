import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

const Icons = {};


const Add = ({ size }) => <Ionicons name="add" size={size}  />;
const Edit = ({ size }) => <Feather name="edit-2" size={size} />;
const Delete = () => <Ionicons name="trash" size={20} color='red'  />;
const Close = () => <Ionicons name="close" size={20} />;

Icons.Add = Add;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Close = Close;

export default Icons;