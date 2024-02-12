import config from '../config';
import { USER_ROLE } from '../modules/user/user.constant';
import { User } from '../modules/user/user.model';

const superUser = {
  id: '0001',
  email: 'mehedihasanfoysal22@gmail.com',
  password: config.super_admin_password,
  needsPasswordChange: false,
  role: USER_ROLE.superAdmin,
  status: 'in-progress',
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  const isSupuerAdminExits = await User.findOne({ role: USER_ROLE.superAdmin });

  if (!isSupuerAdminExits) {
    await User.create(superUser);
  }
};

export default seedSuperAdmin;
