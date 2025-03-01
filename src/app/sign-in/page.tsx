import { AuthProvider } from '../components/AuthProvider';
import { Modal } from '../components/Modal/Modal';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { SignIn } from '../components/SignInPage/SignIn';

export default function Page() {
  return (
    <AuthProvider>
      <RestrictedRoute>
        <Modal>
          <SignIn />
        </Modal>
      </RestrictedRoute>
    </AuthProvider>
  );
}
