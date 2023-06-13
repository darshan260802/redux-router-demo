import { Link } from "react-router-dom";
import { StoreState } from "../../Store";
import style from "./Home.module.scss";
import {useSelector} from 'react-redux';

export default function Home() {

  const user = useSelector((state:StoreState) => state.user)
  

  return (
    <div className={style.container}>
      <h1 className={style.h1} >Hello I am Home</h1>
      <h2>Welcome {user.name} !</h2>
      <Link to={'/profile'}>Go To Profile</Link>
    </div>
  );
}
