const person = {
    name: 'SaiKiran Reddy Kotha',
    address: {
        line1: 'MLK Dr. W',
        City: 'Cincinnati',
        State: 'Ohio'
    },
    profiles: ['LinkedIn', 'Twitter', 'Instagram'],
    printProfile: () =>{
        person.profiles.map (
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript() {
    return (
        <>
            <div>LearningJavaScript</div>
            <div>{person.name}</div>
            <div>{person.address.City}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    );
}