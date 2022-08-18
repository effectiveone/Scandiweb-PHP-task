
import 'antd/dist/antd.css';
import '../index.css';
import { useState,useEffect } from "react";
import { List, Avatar, Button, Skeleton } from 'antd';
import axios from "axios";

function UserList() {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(6); 
    const [isloading, setIsLoading] = useState(true);
      //from live url 	
     //const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
	 //from within php 
     //const fakeDataUrl = 'http://localhost:81/api.php';
	 const fakeDataUrl = 'http://localhost:5000/api';
    
  useEffect(() => {
      /*
    setList([
        'Sample L2ine 1',
        'Sample Line 2',
        'Sample Line 3',
        'Sample Line 4',
      ])
      ref https://codesandbox.io/s/7rz1zk?file=/index.js:2096-2100
*/
      axios.get(fakeDataUrl).then((response) => {
        setIsLoading(false)
        setList(response.data.results)
      });

  }, []);    

  return (

    list?
    <List
    header={<div></div>}
    footer={<div></div>}
    bordered
    dataSource={list}
    renderItem={item => (
      <List.Item>
         <Skeleton avatar title={false} loading={isloading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="#">{item.name.last}</a>}
                description="Grt description"
              />
              <div>content</div>
            </Skeleton>
      </List.Item>
    )}
  />:<></>
    
  );
}

export default UserList;
