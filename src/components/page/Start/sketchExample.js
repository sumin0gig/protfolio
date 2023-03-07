import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { setCookie } from '../../../App';

class SketchExample extends React.Component {  
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  onSubmit=(e)=>{
    e.preventDefault();
  }

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '120px',
          height: '35px',
          borderRadius: '20px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '0px',
          background: '#fff',
          borderRadius: '20px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <form className='favorite-color-form' onSubmit={this.onSubmit}>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }
        <div className='favorite-color'>
          <input type='hidden' value={ `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`}/>
          <button onClick={()=>{ setCookie("r",this.state.color.r); setCookie("g",this.state.color.g); setCookie("b",this.state.color.b); setCookie("a",this.state.color.a); window.location.reload()}}>확인</button>
        </div>
        
      </form>
    )
  }
}

export default SketchExample