import IconTableBarFill0Wght100Grad0Opsz48 from '../components/TableBarFill0Wght100Grad0Opsz48'
import IconTableBarFill0Wght200Grad0Opsz48 from '../components/TableBarFill0Wght200Grad0Opsz48'
import IconTableBarFill0Wght300Grad0Opsz48 from '../components/TableBarFill0Wght300Grad0Opsz48'
import IconTableBarFill0Wght400Grad0Opsz48 from '../components/TableBarFill0Wght400Grad0Opsz48'
import IconTableBarFill0Wght500Grad0Opsz48 from '../components/TableBarFill0Wght500Grad0Opsz48'
import IconTableBarFill0Wght600Grad0Opsz48 from '../components/TableBarFill0Wght600Grad0Opsz48'
import IconTableBarFill0Wght700Grad0Opsz48 from '../components/TableBarFill0Wght700Grad0Opsz48'
import IconTableBarFill1Wght100Grad0Opsz48 from '../components/TableBarFill1Wght100Grad0Opsz48'
import IconTableBarFill1Wght200Grad0Opsz48 from '../components/TableBarFill1Wght200Grad0Opsz48'
import IconTableBarFill1Wght300Grad0Opsz48 from '../components/TableBarFill1Wght300Grad0Opsz48'
import IconTableBarFill1Wght400Grad0Opsz48 from '../components/TableBarFill1Wght400Grad0Opsz48'
import IconTableBarFill1Wght500Grad0Opsz48 from '../components/TableBarFill1Wght500Grad0Opsz48'
import IconTableBarFill1Wght600Grad0Opsz48 from '../components/TableBarFill1Wght600Grad0Opsz48'
import IconTableBarFill1Wght700Grad0Opsz48 from '../components/TableBarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTableBar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTableBarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTableBarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTableBarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTableBarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTableBarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTableBarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTableBarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTableBarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTableBarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTableBarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTableBarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTableBarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTableBarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTableBarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
