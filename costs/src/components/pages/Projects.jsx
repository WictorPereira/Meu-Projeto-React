import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from './../layout/Message.jsx';
import Container from './../layout/Container';
import LinkButton from '../layout/LinkButton.jsx';
import ProjectCard from '../project/ProjectCard.jsx';
import Loading from '../layout/Loading.jsx';

import styles from './Projects.module.css'




function Projects() {

    const [projects, SetProjects] = useState ([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''
    if(location.state){
        message=location.state.message
    }

    useEffect (()=>{
        setTimeout(  //Simulando um delay para ver o loading em ação
            () => {
                fetch('http://localhost:5000/projects',{
            method:'GET',
            headers: {
                'Content-Type':'application/json',
            },
        }).then (resp => resp.json())
          .then (data => {
            console.log(data)
           SetProjects(data)
           setRemoveLoading(true)
          })
          .catch((err)=> console.log(err))
            },300)
    },[])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
              <h1>Meus Projetos </h1>
              <LinkButton to = "/newproject" text ="Criar projeto"/>
            </div>
            
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 &&
                  projects.map((project) => <ProjectCard 
                  name={project.name} 
                  id={project.id}
                  budget={project.budget}
                  category={project.category.name}
                  key={project.id}
                  />)}
                  {!removeLoading && <Loading/>}
                  {removeLoading && projects.length ===0 && (
                    <p>Nao ha projetos cadastrados!</p>
                  )}
            </Container>
        </div>
    )
}

export default Projects