import TodoComp from "./components/TodoComp";
import {useDispatch} from "react-redux";
import { useEffect } from "react";
import { GetTodos } from "../Aplication/actions/GetTodos";

export default function App(){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch<any>(GetTodos());
  },[])
  return(
    <div>
      <TodoComp />
    </div>
  );
}