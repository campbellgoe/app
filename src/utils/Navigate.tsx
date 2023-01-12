import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

// I had to add a functional component so I could use the navigate hook
/**
 * Navigate react component.
 * Navigates to the given page using the 'to' prop.
 * @util
 */
const Navigate = ({ to }: { to: string }) => {
  const navigate = useNavigate()
  // in case this is rendered multiple times, use a ref to only navigate once
  const navigating = useRef(false)
  useEffect(() => {
    if(!navigating.current){
      navigating.current = true
      navigate(to)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null
}

export default Navigate
