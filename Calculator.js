* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.bg{
    background-image: url(Cat.png);
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    background-attachment: fixed;
}

#cal{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#content{
    background: #9fa29f;
	border: 2px solid black;
    padding: 20px;
    border-radius: 10px;

}

#content form input{
    border: 0;
    outline: 0;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    font-size: 15px;
    margin: 10px;
    cursor: pointer;
}
 
#calculation{
	/* border: 2px solid black; */
    padding: 10px;
}

#num{
    background-color: rgb(255, 255, 255);
    color: black;
}

#num:hover{
    background-color: rgb(216, 215, 195);
}

#maths{
    background-color: rgb(0, 65, 195);
    color: white;
}

#maths:hover{
	background-color: rgb(30, 99, 237);
}

#clear{
    background-color: rgb(237, 89, 30);
    color: white;
}

#clear:hover{
    background-color: rgb(255, 72, 0);
}

form #output{
    display: flex;
    justify-content: flex-end;
    margin: 15px 0;
}

form #output input{
    text-align: right;
    flex: 1;
    font-size: 25px;
}
