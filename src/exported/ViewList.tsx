import IconViewListFill0Wght100Grad0Opsz48 from '../components/ViewListFill0Wght100Grad0Opsz48'
import IconViewListFill0Wght200Grad0Opsz48 from '../components/ViewListFill0Wght200Grad0Opsz48'
import IconViewListFill0Wght300Grad0Opsz48 from '../components/ViewListFill0Wght300Grad0Opsz48'
import IconViewListFill0Wght400Grad0Opsz48 from '../components/ViewListFill0Wght400Grad0Opsz48'
import IconViewListFill0Wght500Grad0Opsz48 from '../components/ViewListFill0Wght500Grad0Opsz48'
import IconViewListFill0Wght600Grad0Opsz48 from '../components/ViewListFill0Wght600Grad0Opsz48'
import IconViewListFill0Wght700Grad0Opsz48 from '../components/ViewListFill0Wght700Grad0Opsz48'
import IconViewListFill1Wght100Grad0Opsz48 from '../components/ViewListFill1Wght100Grad0Opsz48'
import IconViewListFill1Wght200Grad0Opsz48 from '../components/ViewListFill1Wght200Grad0Opsz48'
import IconViewListFill1Wght300Grad0Opsz48 from '../components/ViewListFill1Wght300Grad0Opsz48'
import IconViewListFill1Wght400Grad0Opsz48 from '../components/ViewListFill1Wght400Grad0Opsz48'
import IconViewListFill1Wght500Grad0Opsz48 from '../components/ViewListFill1Wght500Grad0Opsz48'
import IconViewListFill1Wght600Grad0Opsz48 from '../components/ViewListFill1Wght600Grad0Opsz48'
import IconViewListFill1Wght700Grad0Opsz48 from '../components/ViewListFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewList = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewListFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewListFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewListFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewListFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewListFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewListFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewListFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewListFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewListFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewListFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewListFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewListFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewListFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewListFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
