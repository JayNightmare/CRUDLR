import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

const Icons = {};


const Add = () => <Ionicons name="add" size={20}  />;
const Edit = () => <Feather name="edit-2" size={20} />;
const Delete = () => <Ionicons name="trash" size={20} color='red'  />;

Icons.Add = Add;
Icons.Delete = Delete;
Icons.Edit = Edit;

export default Icons;