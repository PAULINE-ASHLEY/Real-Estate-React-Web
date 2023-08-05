import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { ContactUsForm } from 'components/layout/Forms';
function ContactView() {
	return (
		<div>
			<PageWrapper>
				<div>
					<ContactUsForm />
				</div>
			</PageWrapper>
		</div>
	);
}

export default ContactView;
