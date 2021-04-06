import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const Features = ({left, filter, clearAll, name})  => {  
    return(
        <Box display="flex" justifyContent="space-between" mt={2} mb={2}>
            <Box>
            {left} items left
            </Box>
            <Box>
                <ButtonGroup color="inherit" aria-label="outlined primary button group">
                    <Button className={name==='All'?'active filter-button':"filter-button"} value={'All'} onClick={ () => filter('All')}>All</Button>
                    <Button className={name==='Left'?'active filter-button':"filter-button"} value={'Left'} onClick={ () => filter('Left')}>Active</Button>
                    <Button className={name==='Completed'?'active filter-button':"filter-button"} value={'Completed'} onClick={ () => filter('Completed')}>Completed</Button>
                </ButtonGroup>
            </Box>
            <Box>
                <Button value={0} onClick={ () => clearAll(0)}>Clear Completed</Button> 
            </Box>
      </Box>
    ) 

}

export default Features;

