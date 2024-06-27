function Students() {

    var student = {
        Name: "James Smith",
        Gender: "Male",
        Subject: "History",
    
    };
    delete student.Subject; // Removing the subject KEY VALUE PAIR from the dictionary before it is disp[alyed.
    document.getElementById("Dictionary").innerHTML = student.Subject;
    
}