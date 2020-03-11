import CreateChild from '../pages/create/CreateChild';

export default {
    exact: true,
    name: 'Create Child',
    protected: true,
    role: 'admin',
    path: '/create-child',
    component: CreateChild
}