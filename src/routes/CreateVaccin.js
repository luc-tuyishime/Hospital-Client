import CreateVaccin from '../pages/create/CreateVaccin';

export default {
    exact: true,
    name: 'Create Vaccin',
    protected: true,
    role: 'admin',
    path: '/create-vaccines',
    component: CreateVaccin
}