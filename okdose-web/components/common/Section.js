import React from 'react';
import useCollapse from 'react-collapsed';
import PropTypes from 'prop-types';
import downIcon from '../../assets/images/icons/downIcon.svg';

function Section ({
  defaultExpanded,
  collapsedHeight,
  title,
  children,
  iconMedium
}) {
  const config = {
    defaultExpanded: defaultExpanded || false,
    collapsedHeight: collapsedHeight || 0
  };
  const {getCollapseProps, getToggleProps, isExpanded} = useCollapse(config);

  return (
    <div className='px-5 w-full p-2'>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <div className='header bg-white text-neutral-700' {...getToggleProps()}>
        <div className='flex flex-row justify-center items-center p-4 font-semibold'>
          <div className='pr-1'>
            <img src={iconMedium} className='w-6 h-6 mr-5' alt='icon-name' />
          </div>
          {isExpanded}
          <h6 className='text-xl uppercase'>{title}</h6>
          <div className='ml-auto'>
            <img
              src={downIcon}
              className='min-w-min max-h-min'
              alt='icon-right'
            />
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <div {...getCollapseProps()} className='bg-white pl-12'>
        {children}
      </div>
    </div>
  );
}

Section.propTypes = {
  defaultExpanded: PropTypes.bool,
  collapsedHeight: PropTypes.number,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  iconMedium: PropTypes.string.isRequired
};

export default Section;
