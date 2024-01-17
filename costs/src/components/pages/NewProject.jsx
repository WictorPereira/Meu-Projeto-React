import styles from './NewProject.module.css'
import ProjectForm from'../project/ProjectForm.jsx'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois acicionar os serviços</p>
            <ProjectForm btnText= "Criar Projeto"/>
        </div>
    )
}

export default NewProject