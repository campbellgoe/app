import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// I had to add a functional component so I could use the navigate hook
/**
 * Navigate react component.
 * Navigates to the given page using the 'to' prop.
 * @util
 */
const Navigate = ({ to }: { to: string }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [navigate, to])
  return null
}

export default Navigate
