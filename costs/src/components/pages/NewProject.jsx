import styles from './NewProject.module.css'
import ProjectForm from'../project/ProjectForm.jsx'

import { useNavigate } from 'react-router-dom'

function NewProject() {

    const history = useNavigate()

    function createPost (project) {
        
        //inicializaçao
        project.cost = 0
        project.servises = []

        fetch("http://localhost:5000/projects",{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },   
            body:JSON.stringify(project)       
        })
        .then((resp) => resp.json())
        .then(data => {console.log(data)
            //redirect
            history('/projects',{state: {message: "Projeto criado com sucesso"}})
    })       
        .catch(err => console.log(err))   
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois acicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText= "Criar Projeto"/>
        </div>
    )
}

export default NewProject