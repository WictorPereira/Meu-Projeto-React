import styles from './ProjectForm.module.css'

import Input from '../form/Input.jsx'
import Select from './../form/Select';
import SubmitButton from '../form/SubmitButton.jsx';

function ProjectForm( {btnText}) {
    return (
        <form className={styles.form}>
            <Input 
              type="text" 
              text="Nome do projeto"
              name="name"
              placeholder="Insira o nome do projeto" />
            <Input 
              type="number" 
              text="Orçamento"
              name="budget"
              placeholder="Insira o Orçamento total" />
            
            <Select name="category_id" 
            text="Criar projeto"/>

            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm