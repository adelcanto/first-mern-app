import styled from 'styled-components'

const DashboardTag = styled.div`
    width: 100vw;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section.my-skills {
        border: 1px grey solid;
        margin: 1rem 2rem;
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;

        h2 {
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: .5rem;
        }

        p {
            margin-bottom: 1rem;
        }
    }

    section.suggested-skills{
        border: 1px grey solid;
        margin: 1rem 2rem;
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;

        h2 {
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: .5rem;
        }

        p {
            margin-bottom: 1rem;
        }

        div {
            width: 100%;
            ul {
                li {
                    display: flex;
                }
            }

        }
    }
`;

export default DashboardTag