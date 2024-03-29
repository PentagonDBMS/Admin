import React, { useState } from 'react';
import { Button, Icon, List, Image, Modal } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import adminImage from '../../images/tom.jpg';

const AdminListItem = ({ admin, onDelete }) => {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleDelete = () => {
        setOpen(false);
        onDelete(admin.admin_id); // Adjust the property if needed
    };

    return (
        <List.Item>
            <Modal
                size='small'
                open={open}
                onClose={() => setOpen(false)}
                dimmer='blurring'
            >
                <Modal.Header>Delete {admin.name}</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete this admin?</p>
                    <p>This action cannot be undone.</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => setOpen(false)}>
                        No
                    </Button>
                    <Button positive onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Actions>
            </Modal>
            <List.Content floated='right'>
                <Button icon onClick={() => setOpen(true)} color='red'>
                    <Icon name='trash' />
                </Button>
            </List.Content>
            <Image avatar src={adminImage} size='tiny' />
            <List.Content>
                <List.Header as='a' onClick={() => navigate(`/admins/details/${admin.admin_id}`)}>{admin.name}</List.Header>
                <List.Description>{admin.email}</List.Description>
            </List.Content>
        </List.Item>
    );
};

export default AdminListItem;
