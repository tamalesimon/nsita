import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySelections } from '../../redux/directory/directory.selector';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (

        <div className='directory-menu'>
            {
                sections.map(({id, ...otherSectionProps}) =>(
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
        </div>

        );

const mapStateProps = createStructuredSelector({
  sections: selectDirectorySelections
});
  


export default connect(mapStateProps) (Directory);