import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet-udacity/components/Heading';
import Image from 'grommet-udacity/components/Image';
import Box from 'grommet-udacity/components/Box';
import Button from 'grommet-udacity/components/Button';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';

const MainAside = ({
  user,
}) => (
  <Box
    basis="1/3"
    pad={{ vertical: 'large', horizontal: 'small' }}
    align="center"
    className={styles.aside}
  >
    <div className={styles.avatarWrapper}>
      <Image
        className={styles.avatarImage}
        size="medium"
        src={user.avatar}
      />
    </div>
    <Box
      className={styles.careerResourcesBlurb}
      align="center"
      pad={{ horizontal: 'small', vertical: 'small' }}
    >
      <Heading tag="h3" align="center">
        {`Hello, ${user.name}!`}
      </Heading>
    </Box>
    <Box
      className={styles.careerResourcesBlurb}
      basis="2/3"
      align="center"
      pad={{ horizontal: 'small', vertical: 'small' }}
    >
      <Button
        label="Post an Article"
        onClick={e => e}
        href="/admin/cms"
        icon={<EditIcon />}
      />
    </Box>
  </Box>
);

MainAside.propTypes = {
  user: PropTypes.object.isRequired,
};

export default cssModules(MainAside, styles);
