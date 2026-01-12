import React from 'react'



function Button({children, variant ="primary", ...props}) {
    const base = "px-4 py-2 rounded-md text-sm font-medium"
    const styles = {
        primary: "bg-primary text-black hover:bg-accent",
        ghost: "text-text hover:bg-surface"
    }

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
        {children}
    </button>
  )
}

export default Button
