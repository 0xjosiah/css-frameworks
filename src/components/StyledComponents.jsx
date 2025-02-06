import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const Card = styled.div`
  width: 600px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ImagePlaceholder = styled.div`
  background-color: #6b7280;
  height: 200px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #303f9f;
  }
`;

function StyledComponents() {
  return (
    <PageWrapper>
      <Card>
        <ImagePlaceholder />
        <ContentWrapper>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur.
          </p>
          <Button>Click Me</Button>
        </ContentWrapper>
      </Card>
    </PageWrapper>
  );
}

export default StyledComponents; 