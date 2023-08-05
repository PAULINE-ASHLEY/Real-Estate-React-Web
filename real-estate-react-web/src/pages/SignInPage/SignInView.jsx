import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { SignInForm } from 'components/layout/Forms';
function SignInView() {
	return (
		<div>
			<PageWrapper>
				<div>
					<SignInForm />
				</div>
			</PageWrapper>
		</div>
	);
}

export default SignInView;
