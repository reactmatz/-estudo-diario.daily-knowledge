class Person {
    handle(){
        return 'handle1';
    }
}

class OtherPerson {
    handle(){
        return 'handle2';
    }
}

var classesNames = [Person,OtherPerson]

function handleCLasses (){
    if(classesNames.length <= 0){
        console.log('end');
        return false;
    }
    console.log(classesNames)
    var className = new classesNames[0];
    console.log(className.handle());

    classesNames.shift();
    console.log(classesNames)
    handleCLasses()
}

handleCLasses();