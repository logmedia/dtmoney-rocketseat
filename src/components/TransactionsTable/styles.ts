import styled from "styled-components"

export const Container = styled.div`
margin-top: 4rem;

table{
  width: 100%;
  border-spacing: 0 0.5rem;

  th{
    color: var(--text-body);
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
    
  }
  td{
    color: var(--text-body);
    padding:  1rem 2rem;
    border: 0;
    background-color: var(--shape); 
    border-radius: 0.25rem;
    &:first-child{
      color: var(--text-title);
    }
    &.deposit{
      color: var(--green);
      text-align: right;
    }
    &.withdraw{
      color: var(--red);
      text-align: right;
    }
  }
  
}

`