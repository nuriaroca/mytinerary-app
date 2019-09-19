import React from 'react';

const Avatar = props => <img src={props.member.img} alt={props.member.name} />;
const MemberName = props => <p>{props.member.name}</p>;
const MemberDescription = props => <p>{props.member.description}</p>

const Member = props => {
    return (
        <div className="member">
            <Avatar member={props.member} />
            <div className="text">
                <MemberName member={props.member} />
                <MemberDescription member={props.member} />
            </div>
        </div>
    )
};

const MembersList = props => {
    console.log(props)
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
        description: 'Agile & Learn Methodology Ninja',
        img: './images/LukeWilliams.png'
    },
    {
        name: 'Martin Wright',
        description: 'Technical Development Team Lead',
        img: './images/MartinWright.png'
    },
    {
        name: 'Sabrina Miller',
        description: 'Digital Product Owner',
        img: './images/SabrinaMiller.png'
    },
    {
        name: 'Sai Patel',
        description: 'UX Designer',
        img: './images/SaiPatel.png'
    },
];

class Team extends React.Component {
    render() {
        return (<MembersList list={members} />);
    }
}

export default Team;
