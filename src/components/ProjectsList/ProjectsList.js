import React, { Component } from 'react'
import { Flipper } from 'react-flip-toolkit'
import ProjectItem from './ProjectItem'
import SelectedProject from './SelectedProject'
import projectsData from './projectsData'
import '../../assets/css/base.css'
import '../../assets/css/pater.css'



import bahuzuImg from '../../assets/images/tusmatik.png';



class ProjectsList extends Component {
  static defaultProps = {}

  static propTypes = {}

  state = {
    focusedGuitarIndex: null
  }
  render() {
    return (
      <Flipper flipKey={this.state.focusedGuitarIndex}>
        <main>
          <div className="content guitar-content">
            <header className="codrops-header">
              <h1 className="codrops-header__title">
                Projects
              </h1>
              <span className="info">
                <a href="https://www.github.com/umutgeyik">
                  Source Code
                </a>
                &nbsp;
              </span>
            </header>
          </div>
          <button className="dummy-menu" />
          <div className="content">
            {typeof this.state.focusedGuitarIndex !== 'number' && (
              <div className="grid">
                {projectsData.map((g, i) => {
                  return (
                    <ProjectItem
                      image={bahuzuImg}
                      {...g}
                      index={i}
                      onClick={() =>
                        this.setState({
                          focusedGuitarIndex: i
                        })
                      }
                    />
                  )
                })}
              </div>
            )}
            {typeof this.state.focusedGuitarIndex === 'number' && (
              <SelectedProject
                image={bahuzuImg}
                {...projectsData[this.state.focusedGuitarIndex]}
                index={this.state.focusedGuitarIndex}
                closeSelected={() =>
                  this.setState({
                    focusedGuitarIndex: undefined
                  })
                }
              />
            )}
          </div>
        </main>
      </Flipper>
    )
  }
}

export default ProjectsList