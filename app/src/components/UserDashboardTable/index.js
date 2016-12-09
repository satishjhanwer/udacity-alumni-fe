import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Table from 'grommet-udacity/components/Table';
import TableRow from 'grommet-udacity/components/TableRow';
import Heading from 'grommet-udacity/components/Heading';
import Tile from 'grommet-udacity/components/Tile';
import List from 'grommet-udacity/components/List';
import Label from 'grommet-udacity/components/Label';
import Select from 'grommet-udacity/components/Select';
import ListItem from 'grommet-udacity/components/ListItem';
import Menu from 'grommet-udacity/components/Menu';
import CheckBox from 'grommet-udacity/components/CheckBox';
import Button from 'grommet-udacity/components/Button';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import CheckmarkIcon from 'grommet-udacity/components/icons/base/Checkmark';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import { Pagination, Avatar } from 'components';
import { BoxWrapper, ListWrapper, InnerWrapper, GrowBox, UserName, TD } from './styles';

const UserDashboardTable = ({
  users,
  perPage,
  currentPage,
  allUsers,
  onChangePage,
  onEdit,
  onSave,
  onClear,
  isMobile,
  editingIndex,
  fields,
  userRoles,
}) => (
  <ListWrapper
    pad="large"
    color="light-2"
  >
    <GrowBox>
      {isMobile ?
        <List>
          <Box justify="center" align="start" pad="small">
            <tbody>
              {users && users.length > 0 && users.map((user, i) =>
                <ListItem>
                  <Tile
                    key={i}
                    align="start"
                    direction="row" pad={{ horizontal: 'small', vertical: 'small' }}
                  >
                    <Box
                      align="center"
                      justify="center"
                      direction="row"
                    >
                      <InnerWrapper
                        direction="column"
                        justify="center"
                        align="center"
                        pad={{ horizontal: 'small', vertical: 'medium' }}
                      >
                        <Avatar src={user.avatar} />
                        <BoxWrapper>
                          {editingIndex && editingIndex === user.id &&
                            <Label>
                              Name:
                            </Label>
                          }
                          {editingIndex && editingIndex === user.id ?
                            <input {...fields.nameInput} type="text" />
                          :
                            <UserName align="center" tag="h3">
                              {user.name}
                            </UserName>
                          }
                        </BoxWrapper>
                        <BoxWrapper>
                          <Label>
                            Email:
                          </Label>
                          {editingIndex && editingIndex === user.id ?
                            <input {...fields.emailInput} type="text" name="email" />
                          :
                            <Heading align="center" tag="h4">
                              {user.email}
                            </Heading>
                          }
                        </BoxWrapper>
                        <BoxWrapper>
                          <Label style={{ flex: 1 }}>
                            Role:
                          </Label>
                          {editingIndex && editingIndex === user.id ?
                            <Select
                              value={fields.roleInput.value}
                              onChange={({ option }) => fields.roleInput.onChange(option.label)}
                              options={userRoles && userRoles.map((item) =>
                                ({
                                  label: `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`,
                                  value: item.toLowerCase(),
                                })
                              )}
                            />
                          :
                            <Heading align="center" tag="h4">
                              {`${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`}
                            </Heading>
                          }
                        </BoxWrapper>
                        <BoxWrapper>
                          <Label style={{ flex: 1 }}>
                            Public
                          </Label>
                          <CheckBox
                            onChange={(e) => fields.publicInput.onChange(e.target.checked)}
                            checked={editingIndex === user.id ?
                              fields.publicInput.value : user.public
                            }
                            toggle={false}
                            disabled={editingIndex !== user.id}
                          />
                        </BoxWrapper>
                        <BoxWrapper>
                          {editingIndex && editingIndex === user.id &&
                            <Label style={{ flex: 1 }}>
                              Bio
                            </Label>
                          }
                          {editingIndex && editingIndex === user.id ?
                            <textarea {...fields.bioInput} rows="4" coluns="40" type="text" />
                          :
                            <Heading align="center" tag="h4">
                              {user.bio}
                            </Heading>
                          }
                        </BoxWrapper>
                        <Menu
                          inline
                          responsive={false}
                          direction="row"
                          justify="center"
                          align="center"
                          style={{ width: '100%' }}
                        >
                          {editingIndex === user.id ?
                            <Button
                              plain
                              icon={<CheckmarkIcon />}
                              onClick={onSave}
                            />
                          :
                            <Button
                              plain
                              icon={<EditIcon />}
                              onClick={() => onEdit(user)}
                            />
                          }
                          {editingIndex === user.id &&
                            <Button
                              plain
                              icon={<CloseIcon />}
                              onClick={onClear}
                            />
                          }
                        </Menu>
                      </InnerWrapper>
                    </Box>
                  </Tile>
                </ListItem>
              )}
            </tbody>
          </Box>
        </List>
      :
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Bio</th>
              <th>Public</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 && users.map((user, i) =>
              <TableRow key={i}>
                <td style={{ minWidth: 80 }}>
                  <Avatar src={user.avatar} size="xsmall" />
                </td>
                <TD>
                  {editingIndex && editingIndex === user.id ?
                    <input {...fields.nameInput} type="text" />
                  :
                    <Heading tag="h4">
                      {user.name}
                    </Heading>
                  }
                </TD>
                <TD>
                  {editingIndex && editingIndex === user.id ?
                    <input {...fields.emailInput} type="text" name="email" />
                  :
                    <Heading tag="h5">
                      {user.email}
                    </Heading>
                  }
                </TD>
                <TD>
                  {editingIndex && editingIndex === user.id ?
                    <Select
                      value={fields.roleInput.value}
                      onChange={({ option }) => fields.roleInput.onChange(option.label)}
                      options={userRoles && userRoles.map((item) =>
                        ({
                          label: `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`,
                          value: item.toLowerCase(),
                        })
                      )}
                    />
                  :
                    <Heading tag="h5">
                      {`${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`}
                    </Heading>
                  }
                </TD>
                <TD>
                  {editingIndex && editingIndex === user.id ?
                    <textarea {...fields.bioInput} rows="4" coluns="40" type="text" />
                  :
                    <p>
                      {user.bio ? `${user.bio.slice(0, 30)}...` : 'N/A'}
                    </p>
                  }
                </TD>
                <td>
                  <CheckBox
                    onChange={(e) => fields.publicInput.onChange(e.target.checked)}
                    checked={editingIndex === user.id ? fields.publicInput.value : user.public}
                    toggle={false}
                    disabled={editingIndex !== user.id}
                  />
                </td>
                <td>
                  <Menu
                    inline
                    responsive={false}
                    direction="row"
                    justify="center"
                    align="center"
                    style={{ width: '100%' }}
                  >
                    {editingIndex === user.id ?
                      <Button
                        plain
                        icon={<CheckmarkIcon />}
                        onClick={onSave}
                      />
                    :
                      <Button
                        plain
                        icon={<EditIcon />}
                        onClick={() => onEdit(user)}
                      />
                    }
                    {editingIndex === user.id &&
                      <Button
                        plain
                        icon={<CloseIcon />}
                        onClick={onClear}
                      />
                    }
                  </Menu>
                </td>
              </TableRow>
            )}
          </tbody>
        </Table>
      }
    </GrowBox>
    <Pagination
      onChange={onChangePage}
      pageSize={perPage}
      currentPage={currentPage}
      total={allUsers.length}
    />
  </ListWrapper>
);

UserDashboardTable.propTypes = {
  users: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  allUsers: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  editingIndex: PropTypes.number,
  userRoles: PropTypes.array,
};

export default UserDashboardTable;