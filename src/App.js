import React from 'react';
import ReactDOM from 'react-dom';


function App() {
  return (
    <div className="App">

    </div>
  );
}

const Avatar = props => <img src={props.member.img} alt={props.member.name} />;
const MemberName = props => <p>{props.member.name}</p>;

const Member = props => {
  return (
    <div>
      <Avatar member={props.member} />
      <MemberName member={props.member} />
    </div>
  )
};

const MembersList = props => {
  const memberList = props.list.map((member, i) => <Member member={member} key={i} />);
  return (
    <div className="member-list">
      {memberList}
    </div>
  )
}

const members = [
  {
    name: 'Luke Williams',
    img: './LukeWilliamsemail.png'
  },
  {
    name: 'Martin Wright',
    img: './public/LukeWilliamsemail.png'
  },
  {
    name: 'Sabrina Miller',
    img: './public/LukeWilliamsemail.png'
  },
  {
    name: 'Sai Patel',
    img: './public/LukeWilliamsemail.png'
  },
];

ReactDOM.render(
  <MembersList list={members} />, document.getElementById('root')
);

export default App;
