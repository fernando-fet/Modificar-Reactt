import React from 'react'
import { Button, Section, Container } from 'react-bulma-components'

 const AddButton = ({onClick}) => {
    return (
        <div>
            <Section>
      <Container>
        <div className="is-pulled-right">
          <Button onClick={onClick} color="primary">Update</Button>
        </div>
      </Container>
    </Section>
            
        </div>
    )
}

export default AddButton