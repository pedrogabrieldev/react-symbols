import IconTaxiAlertFill0Wght100Grad0Opsz48 from '../components/TaxiAlertFill0Wght100Grad0Opsz48'
import IconTaxiAlertFill0Wght200Grad0Opsz48 from '../components/TaxiAlertFill0Wght200Grad0Opsz48'
import IconTaxiAlertFill0Wght300Grad0Opsz48 from '../components/TaxiAlertFill0Wght300Grad0Opsz48'
import IconTaxiAlertFill0Wght400Grad0Opsz48 from '../components/TaxiAlertFill0Wght400Grad0Opsz48'
import IconTaxiAlertFill0Wght500Grad0Opsz48 from '../components/TaxiAlertFill0Wght500Grad0Opsz48'
import IconTaxiAlertFill0Wght600Grad0Opsz48 from '../components/TaxiAlertFill0Wght600Grad0Opsz48'
import IconTaxiAlertFill0Wght700Grad0Opsz48 from '../components/TaxiAlertFill0Wght700Grad0Opsz48'
import IconTaxiAlertFill1Wght100Grad0Opsz48 from '../components/TaxiAlertFill1Wght100Grad0Opsz48'
import IconTaxiAlertFill1Wght200Grad0Opsz48 from '../components/TaxiAlertFill1Wght200Grad0Opsz48'
import IconTaxiAlertFill1Wght300Grad0Opsz48 from '../components/TaxiAlertFill1Wght300Grad0Opsz48'
import IconTaxiAlertFill1Wght400Grad0Opsz48 from '../components/TaxiAlertFill1Wght400Grad0Opsz48'
import IconTaxiAlertFill1Wght500Grad0Opsz48 from '../components/TaxiAlertFill1Wght500Grad0Opsz48'
import IconTaxiAlertFill1Wght600Grad0Opsz48 from '../components/TaxiAlertFill1Wght600Grad0Opsz48'
import IconTaxiAlertFill1Wght700Grad0Opsz48 from '../components/TaxiAlertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTaxiAlert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTaxiAlertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTaxiAlertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTaxiAlertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTaxiAlertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTaxiAlertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTaxiAlertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTaxiAlertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTaxiAlertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTaxiAlertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTaxiAlertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTaxiAlertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTaxiAlertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTaxiAlertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTaxiAlertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
