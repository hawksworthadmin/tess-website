import React from 'react'

export default function PillarThree() {
	return (
		<section className="local-councils-services-area pb-70 pt-70">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="local-councils-content pr-15">
							<h2 style={{ fontSize: '30px' }}>
								Pillar  3: Improving Teacher Development and Making Education
								Expenditures Transparent and accessible For Policy Formulation
							</h2>
							<p style={{ fontSize: '20px' }}>
								{/* {`The objective of this expanded results area is to reduce the
								overall unit cost of education provision through improved
								teacher deployment practices and improved transparency of
								education spending data. These results will be achieved through
								the following DLIs: I. Improved Teacher Deployment (DL1 3.1) II.
								Improved Transparency of Education Spending (DLI 3.2)`} */}
								The objective of this expanded results area is to reduce the
								overall unit cost of education provision through improved
								teacher deployment practices and improved transparency of
								education spending data. This will be achieved through the
								following Disbursement Linked Indicators and Disbursement Linked
								Results:
							</p>
						</div>
					</div>
					<div className="col-lg-6" bis_skin_checked="1">
						<div className="local-councils-img pl-15" bis_skin_checked="1">
							<img
								src="/assets/images/what-we-do/tess_school.jpeg"
								alt="Image"
								className="rounded"
							/>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div style={{ fontSize: '20px' }}>
					<p style={{ fontSize: '20px' }} className="fw-bold">
						Disbursement-Linked Indicator:
					</p>
					<ul>
						<li>Improved Teacher Deployment</li>
					</ul>
				</div>
				<br />
				<div style={{ fontSize: '20px' }}>
					<p style={{ fontSize: '20px' }} className="fw-bold">
						Disbursement-Linked Result 1: Teacher Deployment Policy:
					</p>
					<ul style={{ listStyle: 'none' }}>
						<li>
							States are required to develop and issue a State-level Teacher
							Deployment Policy that is aligned with overall basic education
							policies, stipulate merit-based recruitment policies and
							need-based teacher deployment policies, developed with adequate
							stakeholder engagement that shows transparency and prioritizes
							staffing rural primary schools with high PTRs with shortage of
							teachers, and prescribes location-based incentives for teachers
							deployed to hard-to-serve locations and rural areas with high
							PTRs.
						</li>
					</ul>
				</div>

				<div style={{ fontSize: '20px' }}>
					<p style={{ fontSize: '20px' }} className="fw-bold">
						Disbursement-Linked Result 2: Improved Teacher Deployment:
					</p>
					<ul style={{ listStyle: 'none' }}>
						<li>
							States will be rewarded US$2,000 for each newly recruited teacher
							deployed to rural schools which have been identified as having a
							shortage of teachers specifically to those rural schools with a
							PTR greater than 70. Similarly, States will also be rewarded for
							redeployment of teachers from primary schools with a PTR below 30
							to schools with a PTR above 70.
						</li>
					</ul>
				</div>

				{/* SECOND */}
				<br />
				<br />
				<div style={{ fontSize: '20px' }}>
					<p style={{ fontSize: '20px' }} className="fw-bold">
						Disbursement-Linked Indicator:
					</p>
					<ul>
						<li style={{ fontSize: '20px' }}>
							Improved Transparency in Education Spending <br />
							This DLI has two key results.{' '}
						</li>
					</ul>
				</div>
				<br />
				<div style={{ fontSize: '20px' }}>
					<p style={{ fontSize: '20px' }} className="fw-bold">
						Disbursement-Linked Result 1: State Education Expenditures Accounts
						published:
					</p>
					<ul style={{ listStyle: 'none' }}>
						<li>
							States are required to publish annual education expenditure
							reports compiled and approved by the State Accountant General. The
							report includes spending by administrative units in the education
							and training sector, including other Ministries, Departments and
							Agencies (MDAs); by economic classification such as capital and
							recurrent expenditures; by functions such as levels of education
							including pre-school, primary, JSS, Senior Secondary School (SSS),
							non-formal, post-secondary non-tertiary and tertiary.
						</li>
					</ul>
				</div>

				<div style={{ fontSize: '20px' }}>
					<p style={{ fontSize: '20px' }} className="fw-bold">
						Disbursement-Linked Result 2: SUBEB Expenditure Accounts by Program
						and Outputs published:
					</p>
					<ul style={{ listStyle: 'none' }}>
						<li>
							States are required to publish SUBEB’s expenditures and outputs by
							program such as matching grants for infrastructure; Teacher
							Professional Development; Instructional and learning materials;
							Special needs education; Imbalance and good governance programs.
							The report should include the list of schools with their
							geo-coordinates, that benefit from SUBEBs’ investment. For each
							beneficiary school, the report should include information on
							infrastructure built or upgraded, training programs for teachers
							and number of teachers participating, number of instructional
							materials provided and number of students benefited.
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
