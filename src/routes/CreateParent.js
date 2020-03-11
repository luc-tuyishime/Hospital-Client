import CreateParent from '../pages/create/CreateParent';

export default {
    exact: true,
    name: 'Create Parent',
    protected: true,
    role: 'admin',
    path: '/create-parent',
    component: CreateParent
}