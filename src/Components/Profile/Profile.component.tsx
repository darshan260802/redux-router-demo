import { useDispatch, useSelector } from "react-redux";
import style from "./Profile.module.scss";
import { StoreState } from "../../Store";
import { updateName } from "../../Store/user/userSlice";
import { Link } from "react-router-dom";

export default function Profile() {
  const user = useSelector((state: StoreState) => state.user);
  const dispatch = useDispatch();

  const changeName = () => {
    const newName = (document.querySelector("#inpName") as HTMLInputElement)
      .value;
    dispatch(updateName(newName));
  };

  return (
    <div className={style.container}>
      <h1>Profile</h1>
      <br />
      <h3>Name: {user.name}</h3>
      <br />
      <br />
      <label htmlFor="inpName">
        <p>Change Name</p>
        <input type="text" name="name" id="inpName" defaultValue={user.name} />
      </label>
      <button onClick={changeName}>Update</button>

      <Link to={'/'}>Back to Home</Link>
    </div>
  );
}
