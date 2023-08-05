import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { SignUpForm } from 'components/layout/Forms';
function SignUpView() {
	return (
		<div>
			<PageWrapper>
				<div>
					<SignUpForm />
				</div>
			</PageWrapper>
		</div>
	);
}

export default SignUpView;
