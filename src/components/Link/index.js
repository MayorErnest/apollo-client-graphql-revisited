import React from "react";

export const Link = ({ link: { description, url } }) => {
	return (
		<div>
			<div>
				{description} ({url})
			</div>
		</div>
	);
};
