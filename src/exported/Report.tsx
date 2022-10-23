import IconReportFill0Wght100Grad0Opsz48 from '../components/ReportFill0Wght100Grad0Opsz48'
import IconReportFill0Wght200Grad0Opsz48 from '../components/ReportFill0Wght200Grad0Opsz48'
import IconReportFill0Wght300Grad0Opsz48 from '../components/ReportFill0Wght300Grad0Opsz48'
import IconReportFill0Wght400Grad0Opsz48 from '../components/ReportFill0Wght400Grad0Opsz48'
import IconReportFill0Wght500Grad0Opsz48 from '../components/ReportFill0Wght500Grad0Opsz48'
import IconReportFill0Wght600Grad0Opsz48 from '../components/ReportFill0Wght600Grad0Opsz48'
import IconReportFill0Wght700Grad0Opsz48 from '../components/ReportFill0Wght700Grad0Opsz48'
import IconReportFill1Wght100Grad0Opsz48 from '../components/ReportFill1Wght100Grad0Opsz48'
import IconReportFill1Wght200Grad0Opsz48 from '../components/ReportFill1Wght200Grad0Opsz48'
import IconReportFill1Wght300Grad0Opsz48 from '../components/ReportFill1Wght300Grad0Opsz48'
import IconReportFill1Wght400Grad0Opsz48 from '../components/ReportFill1Wght400Grad0Opsz48'
import IconReportFill1Wght500Grad0Opsz48 from '../components/ReportFill1Wght500Grad0Opsz48'
import IconReportFill1Wght600Grad0Opsz48 from '../components/ReportFill1Wght600Grad0Opsz48'
import IconReportFill1Wght700Grad0Opsz48 from '../components/ReportFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReport = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReportFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReportFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReportFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReportFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReportFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReportFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReportFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReportFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReportFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReportFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReportFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReportFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReportFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReportFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
